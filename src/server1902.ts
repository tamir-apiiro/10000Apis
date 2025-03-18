
const express = require('express')
import {handler1902} from "./handler1902";
const app = express()
app.get('/1902', handler1902)
app.listen(3000, () => {})
        