
const express = require('express')
import {handler1734} from "./handler1734";
const app = express()
app.get('/1734', handler1734)
app.listen(3000, () => {})
        