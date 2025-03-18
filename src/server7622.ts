
const express = require('express')
import {handler7622} from "./handler7622";
const app = express()
app.get('/7622', handler7622)
app.listen(3000, () => {})
        