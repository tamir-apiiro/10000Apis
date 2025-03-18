
const express = require('express')
import {handler1044} from "./handler1044";
const app = express()
app.get('/1044', handler1044)
app.listen(3000, () => {})
        