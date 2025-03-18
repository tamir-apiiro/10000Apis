
const express = require('express')
import {handler1736} from "./handler1736";
const app = express()
app.get('/1736', handler1736)
app.listen(3000, () => {})
        