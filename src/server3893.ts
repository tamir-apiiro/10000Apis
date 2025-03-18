
const express = require('express')
import {handler3893} from "./handler3893";
const app = express()
app.get('/3893', handler3893)
app.listen(3000, () => {})
        