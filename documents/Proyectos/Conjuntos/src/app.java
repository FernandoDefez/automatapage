import javax.swing.*;
import java.awt.Container;
import java.awt.event.*;
import java.awt.*;

public class app extends JFrame implements ActionListener{

    //Constants
    private static final Color black = new Color(0, 0, 0);
    private static final Color white = new Color(255, 255, 255);
    private static final Color green = new Color(5, 160, 129); // 5, 160, 129 -> BlueColor
    private static final Color blue = new Color(35, 42, 52); // 35, 42, 52 -> GreenColor
    private static final Color red = new Color(129, 5, 5); // 129, 5, 5 -> RedColor

    //Elements
    private JPanel panel, panel2;
    private JLabel img, message, showText;
    private JTextField textField, textSub;
    private JButton button, remove, empty, addWord;
    private JList list;//declaramos La Lista
    private DefaultListModel modelo;//declaramos el Modelo
    private JScrollPane scroll;

    app(){
        initcomponents();
    }
        
    private void initcomponents(){
        setSize(300, 450);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);

        Container con = getContentPane();

        Icon addIcon = new ImageIcon("../plus.png");
        Icon removeIcon = new ImageIcon("../trash.png");
        Icon emptyIcon = new ImageIcon("../box.png");
        img = new JLabel(new ImageIcon("../temporizador.png"));     img.setBounds(90, 10, 40, 45);
        showText = new JLabel(); showText.setForeground(black); showText.setBounds(1, 10, 225, 45);

        panel = new JPanel();
        panel.setBackground(blue);
        panel.setLayout(null);

        textField = new JTextField();
        textField.setBounds(30, 30, 120, 25);


        button = new JButton(addIcon);
        button.setBackground(Color.WHITE);
        button.setText(" Add");
        button.setBounds(175, 30, 80, 26);
        button.addActionListener(this);

        message = new JLabel();
        message.setForeground(white);
        message.setBounds(30, 60, 200, 25);

        remove = new JButton(removeIcon);
        remove.setBackground(Color.WHITE);
        remove.setText(" Remove");
        remove.setBounds(30, 210, 110, 26);
        remove.addActionListener(this);

        empty = new JButton(emptyIcon);
        empty.setBackground(Color.WHITE);
        empty.setText(" Empty");
        empty.setBounds(160, 210, 96, 26);
        empty.addActionListener(this);

        addWord = new JButton("Add Word");
        addWord.setBounds(165, 370, 90, 26);
        addWord.setBackground(Color.WHITE);
        addWord.addActionListener(this);
          
        textSub = new JTextField();
        textSub.setBounds(30, 370, 115, 25);
        
        panel2 = new JPanel();
        panel2.setBackground(white);
        panel2.setLayout(null);
        panel2.setBounds(30, 260, 225, 70);
        panel2.add(img);
        panel2.add(showText);
        
        panel.add(textField);
        panel.add(button);
        panel.add(message);
        panel.add(remove);
        panel.add(empty);
        panel.add(panel2);
        panel.add(textSub);
        panel.add(addWord);


        
        //instanciamos la lista
        list = new JList();
        list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        //instanciamos el modelo
        modelo = new DefaultListModel();
              
        //instanciamos el Scroll que tendra la lista
        scroll = new JScrollPane();
        scroll.setBounds(30, 90, 225, 100);
        scroll.setViewportView(list);

        panel.add(scroll);
        
        con.add(panel);

    }

    public void updateModel(){
        list.setModel(modelo);
    }

    public void actionPerformed(ActionEvent evt){
        if (evt.getSource() == button){
            try{
                Thread.sleep(300);
                message.setText("Element added successfully");
                addElement();
            }catch(InterruptedException e){
                System.out.println(e);
            }
            message.setText("Element");
        }
        if (evt.getSource() == remove){
            try{
                Thread.sleep(300);
                message.setText("Element removed successfully");
                removeElement();
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
        if (evt.getSource() == empty){
            try{
                message.setText("Set empty");
                Thread.sleep(300);
                emptySet();
            }catch(InterruptedException e){
                System.out.println(e);
            }
        }
        if (evt.getSource() == addWord){
            try{    
                String text = textSub.getText();
                char[] splitText = text.toCharArray();
                String finalText = "";

                for (int i = 0; i < text.length(); i++){   
                    for (int j = 0; j < modelo.getSize(); j++){ 
                        if( splitText[i] == ((String) modelo.getElementAt(j)).charAt(0) ){
                            img.setVisible(false);
                            finalText += splitText[i];
                        }
                    }
                }
                Thread.sleep(211);
                showText.setText(finalText);

                }catch(InterruptedException e){
                    System.out.println(e);
                }
        }
    }
    

    private void addElement(){
        if(textField.getText().equals("")){
        }else{
            char element = textField.getText().charAt(0);
            modelo.addElement(String.valueOf(element));
            textField.setText("");
            updateModel();
        }
    }

    private void removeElement(){
        if(list.getSelectedIndex() >= 0){
            message.setText("Element removed successfully " + list.getSelectedIndex());
            modelo.remove(list.getSelectedIndex());
            updateModel();
        }else{
            message.setText("Please, Select an Item");
        }
    }

    private void emptySet(){
        modelo.clear();
        updateModel();
    }

}