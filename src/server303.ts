
const express = require('express')
import {handler303} from "./handler303";
const app = express()
app.get('/303', handler303)
app.listen(3000, () => {})
        