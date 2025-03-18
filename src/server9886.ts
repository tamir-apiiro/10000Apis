
const express = require('express')
import {handler9886} from "./handler9886";
const app = express()
app.get('/9886', handler9886)
app.listen(3000, () => {})
        