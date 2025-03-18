
const express = require('express')
import {handler1590} from "./handler1590";
const app = express()
app.get('/1590', handler1590)
app.listen(3000, () => {})
        