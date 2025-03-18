
const express = require('express')
import {handler4833} from "./handler4833";
const app = express()
app.get('/4833', handler4833)
app.listen(3000, () => {})
        