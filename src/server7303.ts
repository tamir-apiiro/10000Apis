
const express = require('express')
import {handler7303} from "./handler7303";
const app = express()
app.get('/7303', handler7303)
app.listen(3000, () => {})
        