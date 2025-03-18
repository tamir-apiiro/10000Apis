
const express = require('express')
import {handler1834} from "./handler1834";
const app = express()
app.get('/1834', handler1834)
app.listen(3000, () => {})
        