
const express = require('express')
import {handler1787} from "./handler1787";
const app = express()
app.get('/1787', handler1787)
app.listen(3000, () => {})
        