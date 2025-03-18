
const express = require('express')
import {handler453} from "./handler453";
const app = express()
app.get('/453', handler453)
app.listen(3000, () => {})
        