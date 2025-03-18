
const express = require('express')
import {handler624} from "./handler624";
const app = express()
app.get('/624', handler624)
app.listen(3000, () => {})
        