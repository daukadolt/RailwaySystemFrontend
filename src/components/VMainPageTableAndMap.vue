<template>
<div class="tableFrom">
    <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
        </tr>
        <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
        </tr>
        <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
        </tr>
        <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
        </tr>
        </table>
</div>
</template>
<style scoped>
    table {
        font-family: arial, sans-serif;
        display: inline;        
    }

    td, th {
        margin-top:40px;
        border: 1px solid #dddddd;
        padding: 8px;
    }

    tr:nth-child(odd) {
        background-color:#fff ;
    }
    tr:nth-child(even) {
        background-color:rgb(158, 155, 155) ;
    }
</style>