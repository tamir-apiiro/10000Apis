
const express = require('express')
import {handler1622} from "./handler1622";
const app = express()
app.get('/1622', handler1622)
app.listen(3000, () => {})
        