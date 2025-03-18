
const express = require('express')
import {handler2693} from "./handler2693";
const app = express()
app.get('/2693', handler2693)
app.listen(3000, () => {})
        