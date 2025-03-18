
const express = require('express')
import {handler1280} from "./handler1280";
const app = express()
app.get('/1280', handler1280)
app.listen(3000, () => {})
        