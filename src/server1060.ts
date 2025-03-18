
const express = require('express')
import {handler1060} from "./handler1060";
const app = express()
app.get('/1060', handler1060)
app.listen(3000, () => {})
        