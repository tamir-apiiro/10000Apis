
const express = require('express')
import {handler1440} from "./handler1440";
const app = express()
app.get('/1440', handler1440)
app.listen(3000, () => {})
        