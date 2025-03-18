
const express = require('express')
import {handler2983} from "./handler2983";
const app = express()
app.get('/2983', handler2983)
app.listen(3000, () => {})
        