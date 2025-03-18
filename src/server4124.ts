
const express = require('express')
import {handler4124} from "./handler4124";
const app = express()
app.get('/4124', handler4124)
app.listen(3000, () => {})
        