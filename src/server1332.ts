
const express = require('express')
import {handler1332} from "./handler1332";
const app = express()
app.get('/1332', handler1332)
app.listen(3000, () => {})
        