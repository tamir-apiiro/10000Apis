
const express = require('express')
import {handler1497} from "./handler1497";
const app = express()
app.get('/1497', handler1497)
app.listen(3000, () => {})
        