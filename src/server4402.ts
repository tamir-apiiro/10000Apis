
const express = require('express')
import {handler4402} from "./handler4402";
const app = express()
app.get('/4402', handler4402)
app.listen(3000, () => {})
        