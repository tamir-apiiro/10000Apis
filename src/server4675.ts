
const express = require('express')
import {handler4675} from "./handler4675";
const app = express()
app.get('/4675', handler4675)
app.listen(3000, () => {})
        