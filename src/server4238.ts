
const express = require('express')
import {handler4238} from "./handler4238";
const app = express()
app.get('/4238', handler4238)
app.listen(3000, () => {})
        