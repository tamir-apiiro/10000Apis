
const express = require('express')
import {handler7884} from "./handler7884";
const app = express()
app.get('/7884', handler7884)
app.listen(3000, () => {})
        