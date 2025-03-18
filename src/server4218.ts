
const express = require('express')
import {handler4218} from "./handler4218";
const app = express()
app.get('/4218', handler4218)
app.listen(3000, () => {})
        