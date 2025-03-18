
const express = require('express')
import {handler1826} from "./handler1826";
const app = express()
app.get('/1826', handler1826)
app.listen(3000, () => {})
        