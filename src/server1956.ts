
const express = require('express')
import {handler1956} from "./handler1956";
const app = express()
app.get('/1956', handler1956)
app.listen(3000, () => {})
        