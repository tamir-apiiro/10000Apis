
const express = require('express')
import {handler1924} from "./handler1924";
const app = express()
app.get('/1924', handler1924)
app.listen(3000, () => {})
        