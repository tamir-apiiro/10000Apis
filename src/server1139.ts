
const express = require('express')
import {handler1139} from "./handler1139";
const app = express()
app.get('/1139', handler1139)
app.listen(3000, () => {})
        