
const express = require('express')
import {handler4855} from "./handler4855";
const app = express()
app.get('/4855', handler4855)
app.listen(3000, () => {})
        