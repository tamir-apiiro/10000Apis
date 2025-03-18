
const express = require('express')
import {handler693} from "./handler693";
const app = express()
app.get('/693', handler693)
app.listen(3000, () => {})
        