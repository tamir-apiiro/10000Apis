
const express = require('express')
import {handler1143} from "./handler1143";
const app = express()
app.get('/1143', handler1143)
app.listen(3000, () => {})
        