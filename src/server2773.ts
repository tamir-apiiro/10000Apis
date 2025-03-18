
const express = require('express')
import {handler2773} from "./handler2773";
const app = express()
app.get('/2773', handler2773)
app.listen(3000, () => {})
        