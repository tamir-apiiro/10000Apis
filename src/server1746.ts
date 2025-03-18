
const express = require('express')
import {handler1746} from "./handler1746";
const app = express()
app.get('/1746', handler1746)
app.listen(3000, () => {})
        