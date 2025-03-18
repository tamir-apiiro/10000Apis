
const express = require('express')
import {handler2379} from "./handler2379";
const app = express()
app.get('/2379', handler2379)
app.listen(3000, () => {})
        