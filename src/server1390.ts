
const express = require('express')
import {handler1390} from "./handler1390";
const app = express()
app.get('/1390', handler1390)
app.listen(3000, () => {})
        