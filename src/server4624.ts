
const express = require('express')
import {handler4624} from "./handler4624";
const app = express()
app.get('/4624', handler4624)
app.listen(3000, () => {})
        