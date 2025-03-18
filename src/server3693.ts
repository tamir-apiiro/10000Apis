
const express = require('express')
import {handler3693} from "./handler3693";
const app = express()
app.get('/3693', handler3693)
app.listen(3000, () => {})
        