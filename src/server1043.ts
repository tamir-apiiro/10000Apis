
const express = require('express')
import {handler1043} from "./handler1043";
const app = express()
app.get('/1043', handler1043)
app.listen(3000, () => {})
        