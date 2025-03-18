
const express = require('express')
import {handler9530} from "./handler9530";
const app = express()
app.get('/9530', handler9530)
app.listen(3000, () => {})
        