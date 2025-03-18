
const express = require('express')
import {handler1455} from "./handler1455";
const app = express()
app.get('/1455', handler1455)
app.listen(3000, () => {})
        