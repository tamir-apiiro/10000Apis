
const express = require('express')
import {handler1244} from "./handler1244";
const app = express()
app.get('/1244', handler1244)
app.listen(3000, () => {})
        