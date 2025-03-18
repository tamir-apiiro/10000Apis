
const express = require('express')
import {handler1480} from "./handler1480";
const app = express()
app.get('/1480', handler1480)
app.listen(3000, () => {})
        