
const express = require('express')
import {handler833} from "./handler833";
const app = express()
app.get('/833', handler833)
app.listen(3000, () => {})
        