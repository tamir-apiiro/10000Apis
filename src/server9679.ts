
const express = require('express')
import {handler9679} from "./handler9679";
const app = express()
app.get('/9679', handler9679)
app.listen(3000, () => {})
        