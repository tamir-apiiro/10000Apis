
const express = require('express')
import {handler1996} from "./handler1996";
const app = express()
app.get('/1996', handler1996)
app.listen(3000, () => {})
        