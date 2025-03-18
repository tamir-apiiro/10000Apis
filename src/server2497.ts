
const express = require('express')
import {handler2497} from "./handler2497";
const app = express()
app.get('/2497', handler2497)
app.listen(3000, () => {})
        