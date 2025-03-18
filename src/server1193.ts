
const express = require('express')
import {handler1193} from "./handler1193";
const app = express()
app.get('/1193', handler1193)
app.listen(3000, () => {})
        